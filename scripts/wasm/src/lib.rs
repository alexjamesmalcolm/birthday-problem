use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn generate_range(a: u32, b:u32) -> Vec<u32> {
    (a..b).collect()
}

fn calculate_odds_of_no_same_birthday(n: u32) -> f32 {
    ((365 - n + 1)..365).map(|a| a as f32 / 365.0).product()
}

#[wasm_bindgen]
pub fn calculate_odds_of_same_birthday(n: u32) -> f32 {
    1.0 - calculate_odds_of_no_same_birthday(n)
}

// #[wasm_bindgen]
// pub fn test_a_room(number_of_people: u16, number_of_tries: u16) -> Vec<u16> {
//     let people = (1..(number_of_people + 1)).map();
//     return people.collect();
// }

#[wasm_bindgen]
pub fn check_a_room_of_people(people: Vec<u16>) -> bool {
    return true;
}