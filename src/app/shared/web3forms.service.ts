import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
}

export interface Web3FormsResponse {
  success: boolean;
  message: string;
}

const WEB3FORMS_ACCESS_KEY = '3c95c8c0-a89a-4455-8165-1cc5a7df67fa';

@Injectable({ providedIn: 'root' })
export class Web3FormsService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = 'https://api.web3forms.com/submit';

  submit(payload: ContactFormPayload): Observable<Web3FormsResponse> {
    return this.http.post<Web3FormsResponse>(
      this.endpoint,
      { access_key: WEB3FORMS_ACCESS_KEY, ...payload },
      { headers: new HttpHeaders({ Accept: 'application/json' }) },
    );
  }
}
