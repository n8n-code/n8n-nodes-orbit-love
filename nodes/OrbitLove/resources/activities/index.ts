import type { INodeProperties } from 'n8n-workflow';

export const activitiesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					]
				}
			},
			"options": [
				{
					"name": "GET Activities",
					"value": "GET Activities",
					"action": "List activities for a workspace",
					"description": "List activities for a workspace",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/activities"
						}
					}
				},
				{
					"name": "POST Activities",
					"value": "POST Activities",
					"action": "Create a Custom or a Content activity for a new or existing member",
					"description": "Use this method when you know an identity of the member (github, email, twitter, etc.) but not their Orbit ID. Pass fields in the member object to update the member in addition to creating the activity.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/activities"
						}
					}
				},
				{
					"name": "GET Members Activities",
					"value": "GET Members Activities",
					"action": "List activities for a member",
					"description": "List activities for a member",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/members/{{$parameter[\"member_slug\"]}}/activities"
						}
					}
				},
				{
					"name": "POST Members Activities",
					"value": "POST Members Activities",
					"action": "Create a Custom or a Content activity for a member",
					"description": "Create a Custom or a Content activity for a member",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/members/{{$parameter[\"member_slug\"]}}/activities"
						}
					}
				},
				{
					"name": "DELETE Members Activities",
					"value": "DELETE Members Activities",
					"action": "Delete a post activity",
					"description": "Delete a post activity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/members/{{$parameter[\"member_slug\"]}}/activities/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "PUT Members Activities",
					"value": "PUT Members Activities",
					"action": "Update a custom activity for a member",
					"description": "Update a custom activity for a member",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/members/{{$parameter[\"member_slug\"]}}/activities/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "GET Organizations Activities",
					"value": "GET Organizations Activities",
					"action": "List member activities in an organization",
					"description": "List member activities in an organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/{{$parameter[\"workspace_slug\"]}}/organizations/{{$parameter[\"organization_id\"]}}/activities"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /{workspace_slug}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Activities"
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
						"Activities"
					],
					"operation": [
						"GET Activities"
					]
				}
			}
		},
		{
			"displayName": "Affiliation",
			"name": "affiliation",
			"default": "member",
			"type": "options",
			"options": [
				{
					"name": "Member",
					"value": "member"
				},
				{
					"name": "Teammate",
					"value": "teammate"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "affiliation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Activities"
					]
				}
			}
		},
		{
			"displayName": "Member Tags",
			"name": "member_tags",
			"description": "The list of tags to filter against. Separate tags with `,` to do an intersection (AND), or with `|` to do a union (OR)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "member_tags",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Activities"
					]
				}
			}
		},
		{
			"displayName": "Orbit",
			"name": "orbit",
			"description": "The list of orbit levels to filter against. Accepted values are 1, 2, 3, 4, n. In the request, a format like `23` would include levels 2 and 3. `n` is for members with no orbit level.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "orbit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Activities"
					]
				}
			}
		},
		{
			"displayName": "Activity Type",
			"name": "activity_type",
			"description": "Comma separated list of activity types",
			"default": "discourse:topic:created",
			"type": "options",
			"options": [
				{
					"name": "Discourse Topic Created",
					"value": "discourse:topic:created"
				},
				{
					"name": "Discourse Post Liked",
					"value": "discourse:post:liked"
				},
				{
					"name": "Discourse User Created",
					"value": "discourse:user:created"
				},
				{
					"name": "Discourse Post Created",
					"value": "discourse:post:created"
				},
				{
					"name": "Slack Message Sent",
					"value": "slack:message:sent"
				},
				{
					"name": "Slack Thread Replied",
					"value": "slack:thread:replied"
				},
				{
					"name": "Slack Channel Joined",
					"value": "slack:channel:joined"
				},
				{
					"name": "Note Created",
					"value": "note:created"
				},
				{
					"name": "Post Created",
					"value": "post:created"
				},
				{
					"name": "Issues Opened",
					"value": "issues:opened"
				},
				{
					"name": "Discord Message Sent",
					"value": "discord:message:sent"
				},
				{
					"name": "Issue Comment Created",
					"value": "issue_comment:created"
				},
				{
					"name": "Discord Thread Replied",
					"value": "discord:thread:replied"
				},
				{
					"name": "Custom Happened",
					"value": "custom:happened"
				},
				{
					"name": "Dev Comment",
					"value": "dev:comment"
				},
				{
					"name": "Discord Message Replied",
					"value": "discord:message:replied"
				},
				{
					"name": "Discord Server Joined",
					"value": "discord:server:joined"
				},
				{
					"name": "Insided Conversation Started",
					"value": "insided:conversation:started"
				},
				{
					"name": "Fork Created",
					"value": "fork:created"
				},
				{
					"name": "Insided Idea Replied",
					"value": "insided:idea:replied"
				},
				{
					"name": "Insided Article Created",
					"value": "insided:article:created"
				},
				{
					"name": "Discussions Discussion Created",
					"value": "discussions:discussion_created"
				},
				{
					"name": "Insided Question Replied",
					"value": "insided:question:replied"
				},
				{
					"name": "Discussions Comment",
					"value": "discussions:comment"
				},
				{
					"name": "Discussions Reply",
					"value": "discussions:reply"
				},
				{
					"name": "Insided Article Replied",
					"value": "insided:article:replied"
				},
				{
					"name": "Insided Question Asked",
					"value": "insided:question:asked"
				},
				{
					"name": "Insided Conversation Replied",
					"value": "insided:conversation:replied"
				},
				{
					"name": "Insided Idea Submitted",
					"value": "insided:idea:submitted"
				},
				{
					"name": "Reddit Comment",
					"value": "reddit:comment"
				},
				{
					"name": "Reddit Post",
					"value": "reddit:post"
				},
				{
					"name": "Stackoverflow Answer",
					"value": "stackoverflow:answer"
				},
				{
					"name": "Linkedin Comment",
					"value": "linkedin:comment"
				},
				{
					"name": "Pull Requests Opened",
					"value": "pull_requests:opened"
				},
				{
					"name": "Pull Requests Merged",
					"value": "pull_requests:merged"
				},
				{
					"name": "Star Created",
					"value": "star:created"
				},
				{
					"name": "Stackoverflow Question",
					"value": "stackoverflow:question"
				},
				{
					"name": "Tweet Sent",
					"value": "tweet:sent"
				},
				{
					"name": "Twitter Followed",
					"value": "twitter:followed"
				},
				{
					"name": "Youtube Comment",
					"value": "youtube:comment"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "activity_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Activities"
					]
				}
			}
		},
		{
			"displayName": "Identity",
			"name": "identity",
			"default": "github",
			"type": "options",
			"options": [
				{
					"name": "Github",
					"value": "github"
				},
				{
					"name": "Twitter",
					"value": "twitter"
				},
				{
					"name": "Email",
					"value": "email"
				},
				{
					"name": "Discourse",
					"value": "discourse"
				},
				{
					"name": "Linkedin",
					"value": "linkedin"
				},
				{
					"name": "Devto",
					"value": "devto"
				},
				{
					"name": "Slack",
					"value": "slack"
				},
				{
					"name": "Discord",
					"value": "discord"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "identity",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Activities"
					]
				}
			}
		},
		{
			"displayName": "Company",
			"name": "company%5B%5D",
			"description": "Comma separated list of companies. The union (OR) of companies is applied.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "company[]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Activities"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "title%5B%5D",
			"description": "Comma separated list of job titles. The union (OR) of job titles is applied.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "title[]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Activities"
					]
				}
			}
		},
		{
			"displayName": "Regions",
			"name": "regions%5B%5D",
			"description": "Comma separated list of regions. The union (OR) of regions is applied.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "regions[]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Activities"
					]
				}
			}
		},
		{
			"displayName": "Countries",
			"name": "countries%5B%5D",
			"description": "Comma separated list of countries. The union (OR) of countries is applied.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "countries[]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Activities"
					]
				}
			}
		},
		{
			"displayName": "Cities",
			"name": "cities%5B%5D",
			"description": "Comma separated list of cities. The union (OR) of cities is applied.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "cities[]",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Activities"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"description": "Filter activities after this date. Format: YYYY-MM-DD.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Activities"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "end_date",
			"description": "Filter activities before this date. Format: YYYY-MM-DD.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end_date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Activities"
					]
				}
			}
		},
		{
			"displayName": "Relative",
			"name": "relative",
			"description": "Relative timeframes. Format: this_<integer>_<period>, with period in [days, weeks, months, years]. For example, this_30_days.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "relative",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Activities"
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
						"Activities"
					],
					"operation": [
						"GET Activities"
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
						"Activities"
					],
					"operation": [
						"GET Activities"
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
						"Activities"
					],
					"operation": [
						"GET Activities"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"default": "occurred_at",
			"type": "options",
			"options": [
				{
					"name": "Occurred At",
					"value": "occurred_at"
				},
				{
					"name": "Member",
					"value": "member"
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
						"Activities"
					],
					"operation": [
						"GET Activities"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Deprecated in favor of the activity_type parameter.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Activities"
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
						"Activities"
					],
					"operation": [
						"GET Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /{workspace_slug}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"POST Activities"
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
						"Activities"
					],
					"operation": [
						"POST Activities"
					]
				}
			}
		},
		{
			"displayName": "Activity",
			"name": "activity",
			"type": "string",
			"default": {
				"member": {}
			},
			"routing": {
				"send": {
					"property": "activity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"POST Activities"
					]
				}
			}
		},
		{
			"displayName": "Identity",
			"name": "identity",
			"type": "json",
			"default": "{}",
			"description": "Represents an email address, a profile on networks like github and twitter, or a record in another system.",
			"routing": {
				"send": {
					"property": "identity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"POST Activities"
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
						"Activities"
					],
					"operation": [
						"POST Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /{workspace_slug}/members/{member_slug}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Members Activities"
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
						"Activities"
					],
					"operation": [
						"GET Members Activities"
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
						"Activities"
					],
					"operation": [
						"GET Members Activities"
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
						"Activities"
					],
					"operation": [
						"GET Members Activities"
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
						"Activities"
					],
					"operation": [
						"GET Members Activities"
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
						"Activities"
					],
					"operation": [
						"GET Members Activities"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"default": "occurred_at",
			"type": "options",
			"options": [
				{
					"name": "Occurred At",
					"value": "occurred_at"
				},
				{
					"name": "Member",
					"value": "member"
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
						"Activities"
					],
					"operation": [
						"GET Members Activities"
					]
				}
			}
		},
		{
			"displayName": "Activity Type",
			"name": "activity_type",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "activity_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Members Activities"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Deprecated in favor of the activity_type parameter.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Members Activities"
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
						"Activities"
					],
					"operation": [
						"GET Members Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /{workspace_slug}/members/{member_slug}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"POST Members Activities"
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
						"Activities"
					],
					"operation": [
						"POST Members Activities"
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
						"Activities"
					],
					"operation": [
						"POST Members Activities"
					]
				}
			}
		},
		{
			"displayName": "POST /{workspace_slug}/members/{member_slug}/activities<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"POST Members Activities"
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
						"Activities"
					],
					"operation": [
						"POST Members Activities"
					]
				}
			}
		},
		{
			"displayName": "DELETE /{workspace_slug}/members/{member_slug}/activities/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"DELETE Members Activities"
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
						"Activities"
					],
					"operation": [
						"DELETE Members Activities"
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
						"Activities"
					],
					"operation": [
						"DELETE Members Activities"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"DELETE Members Activities"
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
						"Activities"
					],
					"operation": [
						"DELETE Members Activities"
					]
				}
			}
		},
		{
			"displayName": "PUT /{workspace_slug}/members/{member_slug}/activities/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"PUT Members Activities"
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
						"Activities"
					],
					"operation": [
						"PUT Members Activities"
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
						"Activities"
					],
					"operation": [
						"PUT Members Activities"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"PUT Members Activities"
					]
				}
			}
		},
		{
			"displayName": "Activity Type",
			"name": "activity_type",
			"type": "string",
			"default": "",
			"description": "The type of activity - what action was done by the member. This is a legacy field, use activity_type_key instead.",
			"routing": {
				"send": {
					"property": "activity_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"PUT Members Activities"
					]
				}
			}
		},
		{
			"displayName": "Activity Type Key",
			"name": "activity_type_key",
			"type": "string",
			"default": "",
			"description": "The key for a custom activity type for the workspace. Will create a new activity type if it does not exist.",
			"routing": {
				"send": {
					"property": "activity_type_key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"PUT Members Activities"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "A description of the activity; displayed in the timeline",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"PUT Members Activities"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"type": "string",
			"default": "",
			"description": "Supply a key that must be unique or leave blank to have one generated.",
			"routing": {
				"send": {
					"property": "key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"PUT Members Activities"
					]
				}
			}
		},
		{
			"displayName": "Link",
			"name": "link",
			"type": "string",
			"default": "",
			"description": "A URL for the activity; displayed in the timeline",
			"routing": {
				"send": {
					"property": "link",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"PUT Members Activities"
					]
				}
			}
		},
		{
			"displayName": "Link Text",
			"name": "link_text",
			"type": "string",
			"default": "",
			"description": "The text for the timeline link",
			"routing": {
				"send": {
					"property": "link_text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"PUT Members Activities"
					]
				}
			}
		},
		{
			"displayName": "Occurred At",
			"name": "occurred_at",
			"type": "string",
			"default": "",
			"description": "The date and time the activity occurred; defaults to now",
			"routing": {
				"send": {
					"property": "occurred_at",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"PUT Members Activities"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "{}",
			"description": "Key-value pairs to provide contextual metadata about an activity.",
			"routing": {
				"send": {
					"property": "properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"PUT Members Activities"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"description": "A title for the activity; displayed in the timeline",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"PUT Members Activities"
					]
				}
			}
		},
		{
			"displayName": "Weight",
			"name": "weight",
			"type": "string",
			"default": "",
			"description": "A custom weight to be used in filters and reports; defaults to 1.",
			"routing": {
				"send": {
					"property": "weight",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"PUT Members Activities"
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
						"Activities"
					],
					"operation": [
						"PUT Members Activities"
					]
				}
			}
		},
		{
			"displayName": "GET /{workspace_slug}/organizations/{organization_id}/activities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Organizations Activities"
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
						"Activities"
					],
					"operation": [
						"GET Organizations Activities"
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
						"Activities"
					],
					"operation": [
						"GET Organizations Activities"
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
						"Activities"
					],
					"operation": [
						"GET Organizations Activities"
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
						"Activities"
					],
					"operation": [
						"GET Organizations Activities"
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
						"Activities"
					],
					"operation": [
						"GET Organizations Activities"
					]
				}
			}
		},
		{
			"displayName": "Sort",
			"name": "sort",
			"default": "occurred_at",
			"type": "options",
			"options": [
				{
					"name": "Occurred At",
					"value": "occurred_at"
				},
				{
					"name": "Member",
					"value": "member"
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
						"Activities"
					],
					"operation": [
						"GET Organizations Activities"
					]
				}
			}
		},
		{
			"displayName": "Activity Type",
			"name": "activity_type",
			"default": "content",
			"type": "options",
			"options": [
				{
					"name": "Content",
					"value": "content"
				},
				{
					"name": "Custom",
					"value": "custom"
				},
				{
					"name": "Discord",
					"value": "discord"
				},
				{
					"name": "Discourse",
					"value": "discourse"
				},
				{
					"name": "Github",
					"value": "github"
				},
				{
					"name": "Slack",
					"value": "slack"
				},
				{
					"name": "Twitter",
					"value": "twitter"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "activity_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Activities"
					],
					"operation": [
						"GET Organizations Activities"
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
						"Activities"
					],
					"operation": [
						"GET Organizations Activities"
					]
				}
			}
		},
];
