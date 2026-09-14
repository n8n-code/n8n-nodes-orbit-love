import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { activityTypesDescription } from './resources/activity-types';
import { activitiesDescription } from './resources/activities';
import { webhooksDescription } from './resources/webhooks';
import { membersDescription } from './resources/members';
import { notesDescription } from './resources/notes';
import { organizationsDescription } from './resources/organizations';
import { reportsDescription } from './resources/reports';
import { usersDescription } from './resources/users';
import { workspacesDescription } from './resources/workspaces';

export class OrbitLove implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Orbit Love',
                name: 'N8nDevOrbitLove',
                icon: { light: 'file:./orbit-love.png', dark: 'file:./orbit-love.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Consult Orbit API documentation at https://api.orbit.love/',
                defaults: { name: 'Orbit Love' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevOrbitLoveApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Activity Types",
					"value": "Activity Types",
					"description": ""
				},
				{
					"name": "Activities",
					"value": "Activities",
					"description": ""
				},
				{
					"name": "Webhooks",
					"value": "Webhooks",
					"description": ""
				},
				{
					"name": "Members",
					"value": "Members",
					"description": ""
				},
				{
					"name": "Notes",
					"value": "Notes",
					"description": ""
				},
				{
					"name": "Organizations",
					"value": "Organizations",
					"description": ""
				},
				{
					"name": "Reports",
					"value": "Reports",
					"description": ""
				},
				{
					"name": "Users",
					"value": "Users",
					"description": ""
				},
				{
					"name": "Workspaces",
					"value": "Workspaces",
					"description": ""
				}
			],
			"default": ""
		},
		...activityTypesDescription,
		...activitiesDescription,
		...webhooksDescription,
		...membersDescription,
		...notesDescription,
		...organizationsDescription,
		...reportsDescription,
		...usersDescription,
		...workspacesDescription
                ],
        };
}
