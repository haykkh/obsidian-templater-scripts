import { Plugin, TAbstractFile, TFile, TFolder } from "obsidian";
import TemplaterPlugin from "main";
export interface TestRunConfig {
    template_content: string;
    target_content: string;
    wait_cache: boolean;
    skip_template_modify: boolean;
    skip_target_modify: boolean;
}
export default class TestTemplaterPlugin extends Plugin {
    tests: Array<{
        name: string;
        fn: () => Promise<void>;
    }>;
    plugin: TemplaterPlugin;
    template_file: TFile;
    target_file: TFile;
    active_files: Array<TAbstractFile>;
    onload(): Promise<void>;
    setup(): Promise<void>;
    teardown(): Promise<void>;
    disable_external_plugins(): Promise<void>;
    enable_external_plugins(): Promise<void>;
    load_tests(): Promise<void>;
    test(name: string, fn: () => Promise<void>): void;
    run_tests(): Promise<void>;
    cleanupFiles(): Promise<void>;
    retrieveActiveFile(file_name: string): TAbstractFile;
    createFolder(folder_name: string): Promise<TFolder>;
    createFile(file_name: string, file_content?: string): Promise<TFile>;
    run_and_get_output(template_content: string, target_content?: string, waitCache?: boolean, skip_modify?: boolean): Promise<string>;
    create_new_note_from_template_and_get_output(template_content: string, delay_ms?: number): Promise<string | undefined>;
    run_in_new_leaf(template_content: string, target_content?: string, waitCache?: boolean, skip_modify?: boolean): Promise<void>;
}
