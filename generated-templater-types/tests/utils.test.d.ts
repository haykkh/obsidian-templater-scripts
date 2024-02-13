import TestTemplaterPlugin from "./main.test";
export declare const PLUGIN_NAME = "templater-obsidian";
export declare const TEMPLATE_FILE_NAME = "TemplateFile";
export declare const TARGET_FILE_NAME = "TargetFile";
export declare function delay(ms: number): Promise<void>;
export declare function cache_update(t: TestTemplaterPlugin): Promise<void>;
export declare function properties_are_visible(): boolean;
