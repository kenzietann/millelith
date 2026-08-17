import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Icon } from '../../shared/icon/icon';
import { Reveal } from '../../shared/reveal.directive';
import { Web3FormsService } from '../../shared/web3forms.service';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const GENERIC_ERROR = "Something went wrong — please try again, or email us directly.";

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Icon, Reveal],
  templateUrl: './contact.html',
})
export class Contact {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly web3forms = inject(Web3FormsService);

  readonly status = signal<Status>('idle');
  readonly errorMessage = signal('');

  readonly form = this.fb.group({
    name: this.fb.control('', [Validators.required, Validators.minLength(2)]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    message: this.fb.control('', [Validators.required, Validators.minLength(10)]),
  });

  get name() {
    return this.form.controls.name;
  }

  get email() {
    return this.form.controls.email;
  }

  get message() {
    return this.form.controls.message;
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('submitting');

    this.web3forms.submit(this.form.getRawValue()).subscribe({
      next: (response) => {
        if (response.success) {
          this.status.set('success');
          this.form.reset();
        } else {
          this.errorMessage.set(response.message || GENERIC_ERROR);
          this.status.set('error');
        }
      },
      error: () => {
        this.errorMessage.set(GENERIC_ERROR);
        this.status.set('error');
      },
    });
  }
}
