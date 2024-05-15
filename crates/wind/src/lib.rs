use std::env;
use std::fs;
use std::path::Path;
use regex::Regex;

fn parse_file(file_path: &Path) {
    let file_contents = fs::read_to_string(file_path).unwrap();
    let color_regex = Regex::new(r"\{color\}").unwrap();

    for mat in color_regex.find_iter(&file_contents) {
        println!("Found {}", &file_contents[mat.start()..mat.end()]);
        println!("In file: {}", file_path.display());
    }
}

pub fn parser() {
    let current_dir = env::current_dir().unwrap();
    let dir_path = current_dir.join("src");

    if dir_path.is_dir() {
        traverse_directories(&dir_path);
    } else {
        println!("{} is not a directory!", dir_path.display());
    }
}

fn traverse_directories(dir_path: &Path) {
    let files = fs::read_dir(dir_path).unwrap();

    for file in files {
        let file_path = file.unwrap().path();

        if file_path.is_dir() {
            traverse_directories(&file_path);
        } else if file_path.is_file() {
            parse_file(&file_path);
        }
    }
}