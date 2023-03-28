import {Injectable} from "@angular/core";
import {HttpService} from "./http.service";
import {HttpResponse} from "../shared/types/http-response";
import {OrganizationMemberNode} from "../shared/models/organization-hierarchy";
import {environment} from "../../environments/environment.dev";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class OrgHierarchyService {
  apiGatewayUrl: string = environment.apiGateway;
  constructor(
    private httpService: HttpService,
  ) { }

  getOrgHierarchy({ orgId }: { orgId: string }) {
    const getOrgHierarchyUrl = `${this.apiGatewayUrl}/api/v2/organizations/${orgId}/hierarchy`;

    return this.httpService.get<HttpResponse<OrganizationMemberNode>>({
      url: getOrgHierarchyUrl,
      queryParams: { orgId },
    });
  }
}
