fn main() {
    // print "Please input chars that you want to count: "
    println!("Please input chars that you want to count: ");
    // read input
    let mut input = String::new();
    std::io::stdin()
        .read_line(&mut input)
        .expect("Failed to read line");
    let input = input.trim();
    // print input
    println!("{}", input);
    // split input into chars
    let chars: Vec<char> = input.chars().collect();
    // count chars
    let count = chars.len();
    // print count
    println!("{}", count);
}
