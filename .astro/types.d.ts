declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"astro-components blog.md": {
	id: "astro-components blog.md";
  slug: "dso";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"astro-components blog2.md": {
	id: "astro-components blog2.md";
  slug: "dso1";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"astro-components blog3.md": {
	id: "astro-components blog3.md";
  slug: "meter";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"docs": {
"documentation/custombench.mdx": {
	id: "documentation/custombench.mdx";
  slug: "documentation/custombench";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"documentation/digitalm92a.mdx": {
	id: "documentation/digitalm92a.mdx";
  slug: "documentation/digitalm92a";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"documentation/digitalmulty830.mdx": {
	id: "documentation/digitalmulty830.mdx";
  slug: "documentation/digitalmulty830";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"documentation/dobot.mdx": {
	id: "documentation/dobot.mdx";
  slug: "documentation/dobot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"documentation/ds.mdx": {
	id: "documentation/ds.mdx";
  slug: "documentation/ds";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"documentation/dso.mdx": {
	id: "documentation/dso.mdx";
  slug: "documentation/dso";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"documentation/dso2.mdx": {
	id: "documentation/dso2.mdx";
  slug: "documentation/dso2";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"documentation/index.mdx": {
	id: "documentation/index.mdx";
  slug: "documentation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"documentation/meter.mdx": {
	id: "documentation/meter.mdx";
  slug: "documentation/meter";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"documentation/multy8220b.mdx": {
	id: "documentation/multy8220b.mdx";
  slug: "documentation/multy8220b";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"documentation/oscilloscope.mdx": {
	id: "documentation/oscilloscope.mdx";
  slug: "documentation/oscilloscope";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"documentation/qmanagement.mdx": {
	id: "documentation/qmanagement.mdx";
  slug: "documentation/qmanagement";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"documentation/restaurant.mdx": {
	id: "documentation/restaurant.mdx";
  slug: "documentation/restaurant";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"documentation/solder.mdx": {
	id: "documentation/solder.mdx";
  slug: "documentation/solder";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"documentation/style-guide.mdx": {
	id: "documentation/style-guide.mdx";
  slug: "documentation/style-guide";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"documentation/workbench.mdx": {
	id: "documentation/workbench.mdx";
  slug: "documentation/workbench";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"documentation/workbench1.mdx": {
	id: "documentation/workbench1.mdx";
  slug: "documentation/workbench1";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"in-progress.mdx": {
	id: "in-progress.mdx";
  slug: "in-progress";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
};
"feature": {
"feature-1.md": {
	id: "feature-1.md";
  slug: "feature-1";
  body: string;
  collection: "feature";
  data: InferEntrySchema<"feature">
} & { render(): Render[".md"] };
"feature-2.md": {
	id: "feature-2.md";
  slug: "feature-2";
  body: string;
  collection: "feature";
  data: InferEntrySchema<"feature">
} & { render(): Render[".md"] };
"feature-3.md": {
	id: "feature-3.md";
  slug: "feature-3";
  body: string;
  collection: "feature";
  data: InferEntrySchema<"feature">
} & { render(): Render[".md"] };
"feature-4.md": {
	id: "feature-4.md";
  slug: "feature-4";
  body: string;
  collection: "feature";
  data: InferEntrySchema<"feature">
} & { render(): Render[".md"] };
"feature-5.md": {
	id: "feature-5.md";
  slug: "feature-5";
  body: string;
  collection: "feature";
  data: InferEntrySchema<"feature">
} & { render(): Render[".md"] };
"feature-6.md": {
	id: "feature-6.md";
  slug: "feature-6";
  body: string;
  collection: "feature";
  data: InferEntrySchema<"feature">
} & { render(): Render[".md"] };
"feature-7.md": {
	id: "feature-7.md";
  slug: "feature-7";
  body: string;
  collection: "feature";
  data: InferEntrySchema<"feature">
} & { render(): Render[".md"] };
"feature-8.md": {
	id: "feature-8.md";
  slug: "feature-8";
  body: string;
  collection: "feature";
  data: InferEntrySchema<"feature">
} & { render(): Render[".md"] };
};
"posts": {
"astro-components copy 10.md": {
	id: "astro-components copy 10.md";
  slug: "robotics";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"astro-components copy 11.md": {
	id: "astro-components copy 11.md";
  slug: "multy";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"astro-components copy 12.md": {
	id: "astro-components copy 12.md";
  slug: "dobot";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"astro-components copy 13.md": {
	id: "astro-components copy 13.md";
  slug: "solder";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"astro-components copy 14.md": {
	id: "astro-components copy 14.md";
  slug: "oscilloscope";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"astro-components copy 15.md": {
	id: "astro-components copy 15.md";
  slug: "multy8220b";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"astro-components copy 16.md": {
	id: "astro-components copy 16.md";
  slug: "digitalm92a";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"astro-components copy 17.md": {
	id: "astro-components copy 17.md";
  slug: "digitalmulty830";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"astro-components copy 4.md": {
	id: "astro-components copy 4.md";
  slug: "dso";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"astro-components copy 5.md": {
	id: "astro-components copy 5.md";
  slug: "workbench";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"astro-components copy 6.md": {
	id: "astro-components copy 6.md";
  slug: "custombench";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"astro-components copy 7.md": {
	id: "astro-components copy 7.md";
  slug: "workbench1";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"astro-components copy 8.md": {
	id: "astro-components copy 8.md";
  slug: "dso2";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"astro-components copy 9.md": {
	id: "astro-components copy 9.md";
  slug: "meter";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
};
"slider": {
"slider-1.md": {
	id: "slider-1.md";
  slug: "slider-1";
  body: string;
  collection: "slider";
  data: InferEntrySchema<"slider">
} & { render(): Render[".md"] };
"slider-2.md": {
	id: "slider-2.md";
  slug: "slider-2";
  body: string;
  collection: "slider";
  data: InferEntrySchema<"slider">
} & { render(): Render[".md"] };
"slider-3.md": {
	id: "slider-3.md";
  slug: "slider-3";
  body: string;
  collection: "slider";
  data: InferEntrySchema<"slider">
} & { render(): Render[".md"] };
"slider-4.md": {
	id: "slider-4.md";
  slug: "slider-4";
  body: string;
  collection: "slider";
  data: InferEntrySchema<"slider">
} & { render(): Render[".md"] };
"slider-5.md": {
	id: "slider-5.md";
  slug: "slider-5";
  body: string;
  collection: "slider";
  data: InferEntrySchema<"slider">
} & { render(): Render[".md"] };
"slider-6.md": {
	id: "slider-6.md";
  slug: "slider-6";
  body: string;
  collection: "slider";
  data: InferEntrySchema<"slider">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
