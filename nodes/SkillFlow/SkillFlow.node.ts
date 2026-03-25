import { INodeType, INodeTypeDescription, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';

export class SkillFlow implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'SkillFlow',
        name: 'skillFlow',
        icon: 'file:skillflow.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"]}}',
        description: 'Search and browse AI skills from SkillFlow marketplace',
        defaults: { name: 'SkillFlow' },
        inputs: ['main'],
        outputs: ['main'],
        properties: [
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                options: [
                    { name: 'Search Skills', value: 'search', description: 'Search for AI skills by keyword' },
                    { name: 'Get Skill Details', value: 'getSkill', description: 'Get details of a specific skill' },
                    { name: 'List Categories', value: 'listCategories', description: 'List all skill categories' },
                    { name: 'Trending Skills', value: 'trending', description: 'Get trending skills this week' },
                ],
                default: 'search',
            },
            {
                displayName: 'Query',
                name: 'query',
                type: 'string',
                default: '',
                displayOptions: { show: { operation: ['search'] } },
                description: 'Search query for finding skills',
            },
            {
                displayName: 'Skill ID',
                name: 'skillId',
                type: 'string',
                default: '',
                displayOptions: { show: { operation: ['getSkill'] } },
                description: 'The ID of the skill to retrieve',
            },
        ],
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const operation = this.getNodeParameter('operation', 0) as string;
        const baseUrl = 'https://skillflow.builders/api';
        
        // Placeholder — in production this would call the SkillFlow API
        const results = [{ json: { operation, message: 'SkillFlow node executed successfully', url: baseUrl } }];
        return [results];
    }
}
