import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { OrgHierarchyService } from "../../../../services/org-hierarchy.service";
import { Subscription } from "rxjs";
import { OrganizationChartNode } from "primeng/organizationchart";
import { HttpResponse } from "../../../../shared/types/http-response";
import { OrganizationMemberNode } from "../../../../shared/models/organization-hierarchy";
import { MenuItem, TreeNode, PrimeTemplate } from "primeng/api";
import { ContextMenu } from 'primeng/contextmenu';

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.scss'],
  // encapsulation: ViewEncapsulation 
})
export class HierarchyComponent implements OnInit, OnDestroy {
  @ViewChild('contextMenu', { static: false })
  contextMenu!: ContextMenu;

  getOrganizationHierarchySubscription!: Subscription;
  orgHierarchyData: any;
  selectedNode!: TreeNode;
  shouldShowButton: Record<string, boolean> = {};
  data1!: any[];

  // apple, refined

  constructor(
    private organizationHierarchyService: OrgHierarchyService,
  ) { }

  items!: MenuItem[];

  ngOnInit(): void {
    console.log('Hierarchy component is initializing');
    this.getOrganizationChart();
    this.data1 = [
        {
            "type": "department",
            "data": {
                "memberId": 1,
                "managerId": null,
                "firstName": null,
                "lastName": null,
                "phoneNumber": null,
                "memberEmail": null,
                "memberAge": null,
                "departmentName": "SGroup",
                "departmentId": 9,
                "departmentDescription": "",
                "positionTitle": null,
                "description": ""
            },
            "expanded": true,
            "children": [
                {
                    "type": "member",
                    "data": {
                        "memberId": 2,
                        "managerId": 1,
                        "firstName": "Phu",
                        "lastName": "Dang",
                        "phoneNumber": "0772283591",
                        "memberEmail": "phu.dang@sgroup.vn",
                        "memberAge": 24,
                        "departmentName": null,
                        "departmentId": null,
                        "departmentDescription": null,
                        "positionTitle": "leader",
                        "description": "name: Phu Dang\nage: 24\nemail: phu.dang@sgroup.vn"
                    },
                    "expanded": true,
                    "children": [
                        {
                            "type": "department",
                            "data": {
                                "memberId": 3,
                                "managerId": 2,
                                "firstName": null,
                                "lastName": null,
                                "phoneNumber": null,
                                "memberEmail": null,
                                "memberAge": null,
                                "departmentName": "Tech",
                                "departmentId": 1,
                                "departmentDescription": "Technical",
                                "positionTitle": null,
                                "description": "Technical"
                            },
                            "expanded": true,
                            "children": [
                                {
                                    "type": "member",
                                    "data": {
                                        "memberId": 5,
                                        "managerId": 3,
                                        "firstName": "Tuong",
                                        "lastName": "Nguyen",
                                        "phoneNumber": "0772283591",
                                        "memberEmail": "tuong.nguyen@sgroup.vn",
                                        "memberAge": 24,
                                        "departmentName": null,
                                        "departmentId": null,
                                        "departmentDescription": null,
                                        "positionTitle": "leader",
                                        "description": "name: Tuong Nguyen\nage: 24\nemail: tuong.nguyen@sgroup.vn"
                                    },
                                    "expanded": true,
                                    "children": [
                                        {
                                            "type": "department",
                                            "data": {
                                                "memberId": 6,
                                                "managerId": 5,
                                                "firstName": null,
                                                "lastName": null,
                                                "phoneNumber": null,
                                                "memberEmail": null,
                                                "memberAge": null,
                                                "departmentName": "Frontend",
                                                "departmentId": 3,
                                                "departmentDescription": "",
                                                "positionTitle": null,
                                                "description": ""
                                            },
                                            "expanded": true,
                                            "children": [
                                                {
                                                    "type": "member",
                                                    "data": {
                                                        "memberId": 12,
                                                        "managerId": 6,
                                                        "firstName": "Phuong",
                                                        "lastName": "Nguyen",
                                                        "phoneNumber": "0772283591",
                                                        "memberEmail": "phuong.nguyen@sgroup.vn",
                                                        "memberAge": 24,
                                                        "departmentName": null,
                                                        "departmentId": null,
                                                        "departmentDescription": null,
                                                        "positionTitle": "leader",
                                                        "description": "name: Phuong Nguyen\nage: 24\nemail: phuong.nguyen@sgroup.vn"
                                                    },
                                                    "expanded": true,
                                                    "children": [
                                                        {
                                                            "type": "member",
                                                            "data": {
                                                                "memberId": 14,
                                                                "managerId": 12,
                                                                "firstName": "Kiet",
                                                                "lastName": "Nguyen",
                                                                "phoneNumber": "0772283591",
                                                                "memberEmail": "kiet.nguyen@sgroup.vn",
                                                                "memberAge": 24,
                                                                "departmentName": null,
                                                                "departmentId": null,
                                                                "departmentDescription": null,
                                                                "positionTitle": "member",
                                                                "description": "name: Kiet Nguyen\nage: 24\nemail: kiet.nguyen@sgroup.vn"
                                                            },
                                                            "expanded": true,
                                                            "children": []
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "department",
                                            "data": {
                                                "memberId": 7,
                                                "managerId": 5,
                                                "firstName": null,
                                                "lastName": null,
                                                "phoneNumber": null,
                                                "memberEmail": null,
                                                "memberAge": null,
                                                "departmentName": "Backend",
                                                "departmentId": 4,
                                                "departmentDescription": "",
                                                "positionTitle": null,
                                                "description": ""
                                            },
                                            "expanded": true,
                                            "children": [
                                                {
                                                    "type": "member",
                                                    "data": {
                                                        "memberId": 10,
                                                        "managerId": 7,
                                                        "firstName": "Thinh",
                                                        "lastName": "Le",
                                                        "phoneNumber": "0772283591",
                                                        "memberEmail": "thinh.le@sgroup.vn",
                                                        "memberAge": 24,
                                                        "departmentName": null,
                                                        "departmentId": null,
                                                        "departmentDescription": null,
                                                        "positionTitle": "leader",
                                                        "description": "name: Thinh Le\nage: 24\nemail: thinh.le@sgroup.vn"
                                                    },
                                                    "expanded": true,
                                                    "children": [
                                                        {
                                                            "type": "member",
                                                            "data": {
                                                                "memberId": 11,
                                                                "managerId": 10,
                                                                "firstName": "Cuong",
                                                                "lastName": "Phan",
                                                                "phoneNumber": "0772283591",
                                                                "memberEmail": "cuong.phan@sgroup.vn",
                                                                "memberAge": 24,
                                                                "departmentName": null,
                                                                "departmentId": null,
                                                                "departmentDescription": null,
                                                                "positionTitle": "member",
                                                                "description": "name: Cuong Phan\nage: 24\nemail: cuong.phan@sgroup.vn"
                                                            },
                                                            "expanded": true,
                                                            "children": []
                                                        },
                                                        {
                                                            "type": "member",
                                                            "data": {
                                                                "memberId": 13,
                                                                "managerId": 10,
                                                                "firstName": "Khoa",
                                                                "lastName": "Huynh",
                                                                "phoneNumber": "0772283591",
                                                                "memberEmail": "khoa.huynh@sgroup.vn",
                                                                "memberAge": 24,
                                                                "departmentName": null,
                                                                "departmentId": null,
                                                                "departmentDescription": null,
                                                                "positionTitle": "member",
                                                                "description": "name: Khoa Huynh\nage: 24\nemail: khoa.huynh@sgroup.vn"
                                                            },
                                                            "expanded": true,
                                                            "children": []
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            "type": "department",
                                            "data": {
                                                "memberId": 8,
                                                "managerId": 5,
                                                "firstName": null,
                                                "lastName": null,
                                                "phoneNumber": null,
                                                "memberEmail": null,
                                                "memberAge": null,
                                                "departmentName": "Mobile",
                                                "departmentId": 5,
                                                "departmentDescription": "",
                                                "positionTitle": null,
                                                "description": ""
                                            },
                                            "expanded": true,
                                            "children": []
                                        },
                                        {
                                            "type": "department",
                                            "data": {
                                                "memberId": 9,
                                                "managerId": 5,
                                                "firstName": null,
                                                "lastName": null,
                                                "phoneNumber": null,
                                                "memberEmail": null,
                                                "memberAge": null,
                                                "departmentName": "AI",
                                                "departmentId": 6,
                                                "departmentDescription": "",
                                                "positionTitle": null,
                                                "description": ""
                                            },
                                            "expanded": true,
                                            "children": []
                                        }
                                    ]
                                },
                                {
                                    "type": "member",
                                    "data": {
                                        "memberId": 16,
                                        "managerId": 3,
                                        "firstName": "Vy",
                                        "lastName": "Ho",
                                        "phoneNumber": "0772283591",
                                        "memberEmail": "vy.ho@sgroup.vn",
                                        "memberAge": 24,
                                        "departmentName": null,
                                        "departmentId": null,
                                        "departmentDescription": null,
                                        "positionTitle": "sub-leader",
                                        "description": "name: Vy Ho\nage: 24\nemail: vy.ho@sgroup.vn"
                                    },
                                    "expanded": true,
                                    "children": []
                                }
                            ]
                        },
                        {
                            "type": "department",
                            "data": {
                                "memberId": 4,
                                "managerId": 2,
                                "firstName": null,
                                "lastName": null,
                                "phoneNumber": null,
                                "memberEmail": null,
                                "memberAge": null,
                                "departmentName": "Non-tech",
                                "departmentId": 2,
                                "departmentDescription": "Non-tech",
                                "positionTitle": null,
                                "description": "Non-tech"
                            },
                            "expanded": true,
                            "children": []
                        }
                    ]
                }
            ]
        }
    ]
  }

  ngOnDestroy() {
    this.getOrganizationHierarchySubscription?.unsubscribe();
  }

  ngDoCheck() {
    console.log('Angular changes detector here');
  }

  onRightClick(event: any) {
    event.preventDefault();
    console.log('Clicked');
    this.contextMenu.show();
  }

  handleMouseOverNode(nodeId: string) {
    this.shouldShowButton[nodeId] = true;
    console.log(this.shouldShowButton);
  }

  handleMouseOutNode(nodeId: string) {
    this.shouldShowButton[nodeId] = false;
    console.log(this.shouldShowButton);
  }

  getOrganizationChart() {
    const onObservableEmit = (value: HttpResponse<{} | OrganizationMemberNode>) => {
      const orgTree = value.data as Array<OrganizationChartNode>;
      this.orgHierarchyData = orgTree;
      this.getOrganizationHierarchySubscription.unsubscribe();
    }

    this.getOrganizationHierarchySubscription = this.organizationHierarchyService
      .getOrgHierarchy({ orgId: 'hehe' })
      .subscribe({
        next: onObservableEmit,
        complete: () => { },
      });
  }
}
