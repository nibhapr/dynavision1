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
function formatDate(date: Date): string {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "short",
		day: "numeric",
	};

	return new Date(date).toLocaleDateString(undefined, options);
}
// Capitalize the first letter
function capitalize(str: string): string {
	if (typeof str !== "string" || str.length === 0) {
		return str;
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export { formatDate, capitalize };
