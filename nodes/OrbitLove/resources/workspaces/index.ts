import type { INodeProperties } from 'n8n-workflow';

export const workspacesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Workspaces"
					]
				}
			},
			"options": [
				{
					"name": "GET Workspaces",
					"value": "GET Workspaces",
					"action": "Get all workspaces for the current user",
					"description": "Get all workspaces for the current user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/workspaces"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /workspaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Workspaces"
					],
					"operation": [
						"GET Workspaces"
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
						"Workspaces"
					],
					"operation": [
						"GET Workspaces"
					]
				}
			}
		},
];
