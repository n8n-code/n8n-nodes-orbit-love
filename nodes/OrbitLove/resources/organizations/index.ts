import type { INodeProperties } from 'n8n-workflow';

export const organizationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					]
				}
			},
			"options": [
				{
					"name": "GET Organizations",
					"value": "GET Organizations",
					"action": "List organizations in a workspace",
					"description": "List organizations in a workspace",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/organizations"
						}
					}
				},
				{
					"name": "PUT Organizations",
					"value": "PUT Organizations",
					"action": "Update an organization",
					"description": "Update an organization",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/organizations/{{$parameter[\"organization_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /{workspace_slug}/organizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"GET Organizations"
					]
				}
			}
		},
		{
			"displayName": "Workspace Slug",
			"name": "workspace_slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"GET Organizations"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "query",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"GET Organizations"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"GET Organizations"
					]
				}
			}
		},
		{
			"displayName": "Direction",
			"name": "direction",
			"default": "ASC",
			"type": "options",
			"options": [
				{
					"name": "ASC",
					"value": "ASC"
				},
				{
					"name": "DESC",
					"value": "DESC"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "direction",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"GET Organizations"
					]
				}
			}
		},
		{
			"displayName": "Items",
			"name": "items",
			"default": "10",
			"type": "options",
			"options": [
				{
					"name": "10",
					"value": "10"
				},
				{
					"name": "50",
					"value": "50"
				},
				{
					"name": "100",
					"value": "100"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "items",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"GET Organizations"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"default": "name",
			"type": "options",
			"options": [
				{
					"name": "Name",
					"value": "name"
				},
				{
					"name": "Website",
					"value": "website"
				},
				{
					"name": "Members Count",
					"value": "members_count"
				},
				{
					"name": "Employees Count",
					"value": "employees_count"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "sort",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"GET Organizations"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "Provide a Authorization header with format 'Bearer <api_key>'. This is the recommended approach. Make sure to include the 'Bearer' part in the text box here.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"GET Organizations"
					]
				}
			}
		},
		{
			"displayName": "PUT /{workspace_slug}/organizations/{organization_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"PUT Organizations"
					]
				}
			}
		},
		{
			"displayName": "Workspace Slug",
			"name": "workspace_slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"PUT Organizations"
					]
				}
			}
		},
		{
			"displayName": "Organization Id",
			"name": "organization_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"PUT Organizations"
					]
				}
			}
		},
		{
			"displayName": "Crm Uid",
			"name": "crm_uid",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the organization in your CRM.",
			"routing": {
				"send": {
					"property": "crm_uid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"PUT Organizations"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Crm Url",
			"name": "crm_url",
			"type": "string",
			"default": "",
			"description": "A link to the organization profile in your CRM.",
			"routing": {
				"send": {
					"property": "crm_url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"PUT Organizations"
					]
				}
			}
		},
		{
			"displayName": "Deal Closed Date",
			"name": "deal_closed_date",
			"type": "string",
			"default": "",
			"description": "The date the organization became a customer.",
			"routing": {
				"send": {
					"property": "deal_closed_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"PUT Organizations"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Lifecycle Stage",
			"name": "lifecycle_stage",
			"type": "string",
			"default": "",
			"description": "The current stage of the organization in the marketing or sales process.",
			"routing": {
				"send": {
					"property": "lifecycle_stage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"PUT Organizations"
					]
				}
			}
		},
		{
			"displayName": "Owner Email",
			"name": "owner_email",
			"type": "string",
			"default": "",
			"description": "The email of the team member who is in charge of the organization.",
			"routing": {
				"send": {
					"property": "owner_email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"PUT Organizations"
					]
				}
			}
		},
		{
			"displayName": "Owner Name",
			"name": "owner_name",
			"type": "string",
			"default": "",
			"description": "The name of the team member who is in charge of the organization.",
			"routing": {
				"send": {
					"property": "owner_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"PUT Organizations"
					]
				}
			}
		},
		{
			"displayName": "Price Plan",
			"name": "price_plan",
			"type": "string",
			"default": "",
			"description": "The pricing plan the organization is on.",
			"routing": {
				"send": {
					"property": "price_plan",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"PUT Organizations"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source",
			"name": "source",
			"type": "string",
			"default": "",
			"description": "The name of the CRM you use for tracking the organization.",
			"routing": {
				"send": {
					"property": "source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"PUT Organizations"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_bearer",
			"type": "string",
			"default": "",
			"description": "Provide a Authorization header with format 'Bearer <api_key>'. This is the recommended approach. Make sure to include the 'Bearer' part in the text box here.",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"PUT Organizations"
					]
				}
			}
		},
];
