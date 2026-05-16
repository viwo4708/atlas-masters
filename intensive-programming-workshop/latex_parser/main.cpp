#include "latex.hpp"
#include <fstream>
#include <sstream>
#include <iostream>

int main() {

    std::ifstream file("mc_question.txt");

    if (!file) {
        std::cerr << "Error opening file.\n";
        return 1;
    }

    std::stringstream buffer;
    buffer << file.rdbuf();

    std::string input = buffer.str();

    auto question = QuestionFactory::createQuestion(input);

       // Open output file
    std::ofstream outFile("output.tex");

    if (!outFile) {
        std::cerr << "Error opening output file\n";
        return 1;
    }

    // Write LaTeX
    outFile << question->toLatex();

    // Optional: also print to console
    std::cout << question->toLatex();


    return 0;
}