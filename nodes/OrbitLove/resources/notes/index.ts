import type { INodeProperties } from 'n8n-workflow';

export const notesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Notes"
					]
				}
			},
			"options": [
				{
					"name": "GET Members Notes",
					"value": "GET Members Notes",
					"action": "Get the member's notes",
					"description": "Get the member's notes",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/members/{{$parameter[\"member_slug\"]}}/notes"
						}
					}
				},
				{
					"name": "POST Members Notes",
					"value": "POST Members Notes",
					"action": "Create a note",
					"description": "Create a note",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/members/{{$parameter[\"member_slug\"]}}/notes"
						}
					}
				},
				{
					"name": "PUT Members Notes",
					"value": "PUT Members Notes",
					"action": "Update a note",
					"description": "Update a note",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/members/{{$parameter[\"member_slug\"]}}/notes/{{$parameter[\"id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /{workspace_slug}/members/{member_slug}/notes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notes"
					],
					"operation": [
						"GET Members Notes"
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
						"Notes"
					],
					"operation": [
						"GET Members Notes"
					]
				}
			}
		},
		{
			"displayName": "Member Slug",
			"name": "member_slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Notes"
					],
					"operation": [
						"GET Members Notes"
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
						"Notes"
					],
					"operation": [
						"GET Members Notes"
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
						"Notes"
					],
					"operation": [
						"GET Members Notes"
					]
				}
			}
		},
		{
			"displayName": "POST /{workspace_slug}/members/{member_slug}/notes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notes"
					],
					"operation": [
						"POST Members Notes"
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
						"Notes"
					],
					"operation": [
						"POST Members Notes"
					]
				}
			}
		},
		{
			"displayName": "Member Slug",
			"name": "member_slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Notes"
					],
					"operation": [
						"POST Members Notes"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "body",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notes"
					],
					"operation": [
						"POST Members Notes"
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
						"Notes"
					],
					"operation": [
						"POST Members Notes"
					]
				}
			}
		},
		{
			"displayName": "PUT /{workspace_slug}/members/{member_slug}/notes/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Notes"
					],
					"operation": [
						"PUT Members Notes"
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
						"Notes"
					],
					"operation": [
						"PUT Members Notes"
					]
				}
			}
		},
		{
			"displayName": "Member Slug",
			"name": "member_slug",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Notes"
					],
					"operation": [
						"PUT Members Notes"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Notes"
					],
					"operation": [
						"PUT Members Notes"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "body",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Notes"
					],
					"operation": [
						"PUT Members Notes"
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
						"Notes"
					],
					"operation": [
						"PUT Members Notes"
					]
				}
			}
		},
];
