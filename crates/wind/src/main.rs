mod safelist;
use std::env;

fn main(){
    match env::current_dir() {
        Ok(current_dir) => println!("Current directory: {}", current_dir.display()),
        Err(e) => println!("Error getting current directory: {}", e),
    }
    wind::parser()
}