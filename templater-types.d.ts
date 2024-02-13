import { InternalModuleDate } from "./generated-templater-types/src/core/functions/internal_functions/date/InternalModuleDate";
import { InternalModuleFile } from "./generated-templater-types/src/core/functions/internal_functions/file/InternalModuleFile";

export declare class Templater {
  file: {
    content: ReturnType<InternalModuleFile["generate_content"]>;
    create_new: ReturnType<InternalModuleFile["generate_create_new"]>;
    creation_date: ReturnType<InternalModuleFile["generate_creation_date"]>;
    cursor: ReturnType<InternalModuleFile["generate_cursor"]>;
    cursor_append: ReturnType<InternalModuleFile["generate_cursor_append"]>;
    exists: ReturnType<InternalModuleFile["generate_exists"]>;
    find_tfile: ReturnType<InternalModuleFile["generate_find_tfile"]>;
    folder: ReturnType<InternalModuleFile["generate_folder"]>;
    include: ReturnType<InternalModuleFile["generate_include"]>;
    last_modified_date: ReturnType<
      InternalModuleFile["generate_last_modified_date"]
    >;
    move: ReturnType<InternalModuleFile["generate_move"]>;
    path: ReturnType<InternalModuleFile["generate_path"]>;
    rename: ReturnType<InternalModuleFile["generate_rename"]>;
    selection: ReturnType<InternalModuleFile["generate_selection"]>;
    tags: ReturnType<InternalModuleFile["generate_tags"]>;
    title: ReturnType<InternalModuleFile["generate_title"]>;
  };

  date: {
    now: ReturnType<InternalModuleDate["generate_now"]>;
    tomorrow: ReturnType<InternalModuleDate["generate_tomorrow"]>;
    weekday: ReturnType<InternalModuleDate["generate_weekday"]>;
    yesterday: ReturnType<InternalModuleDate["generate_yesterday"]>;
  };
}
