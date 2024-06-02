export function getCategoryMetadata(category: string) {
	return {
		title: `All articles in '${category}' category in AstroVerse`,
		description: `Browse all articles under the ${category} category in AstroVerse`,
	};
}

export async function getTableOfContents(
	content: string,
): Promise<TableOfContents> {
	const result = await remark().use(getToc).process(content);

	return result.data;
}
