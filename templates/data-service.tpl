import { HttpClient } from '@angular/common/http';

@Injectable()
export class {{ pascalCase name}}DataService {

  constructor(private http: HttpClient) {
  }

  get() {
    const url = `url/`;

    return this.http.get<ResponseType>(url);
  }

  post(payload) {
    const url = `url/`;

    return this.http.post(url, payload);
  }

  update(id, payload) {
    const url = `url/`;

    return this.http.put(url, payload);
  }

  delete(id) {
    const url = `url/${id}`;

    return this.http.delete(url);
  }

}
