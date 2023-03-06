module.exports = {
	plugins: ['commitlint-plugin-jira-rules'],
	extends: ['jira'],
	rules: {
		'jira-task-id-max-length': [2, 'always', 6],
		'jira-task-id-min-length': [2, 'always', 6],
		'jira-task-id-project-key': [2, 'always', ['GS']],
		'jira-commit-message-separator': [2, 'always', [': ']],
		'header-min-length': [2, 'always', 25]
	}
};
