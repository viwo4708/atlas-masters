#include "latex.hpp"

#include <sstream>
#include <cctype>
#include <memory>
#include <vector>
#include <string>
#include <algorithm>

//
// TRUE / FALSE QUESTION
//

TrueFalseQuestion::TrueFalseQuestion(const std::string& text, bool answer)
    : answer(answer)
{
    questionText = text;
}

std::string TrueFalseQuestion::toLatex() const {

    std::stringstream latex; //create an output stream that's a string

    latex << "\\item\n"; //output item
    latex << questionText << "\n"; //output question text and newline

    latex << "\\begin{solution}\n";
    latex << (answer ? "T" : "F") << "\n";
    latex << "\\end{solution}\n";

    return latex.str();
}

//
// SHORT ANSWER QUESTION
//

ShortAnswerQuestion::ShortAnswerQuestion(
    const std::string& text,
    const std::string& answer
)
    : answer(answer)
{
    questionText = text;
}

std::string ShortAnswerQuestion::toLatex() const {

    std::stringstream latex;

    latex << "\\item\n";
    latex << questionText << "\n";

    latex << "\\begin{solution}\n";
    latex << answer << "\n";
    latex << "\\end{solution}\n";

    return latex.str();
}

//
// MULTIPLE CHOICE QUESTION
//

MultipleChoiceQuestion::MultipleChoiceQuestion(
    const std::string& text,
    const std::vector<std::string>& options,
    char correctAnswer
)
    : options(options), correctAnswer(correctAnswer)
{
    questionText = text;
}

std::string MultipleChoiceQuestion::toLatex() const {

    std::stringstream latex;

    latex << "\\item\n";
    latex << questionText << "\n";

    latex << "\\begin{enumerate}\n";

    for (const auto& option : options) {
        latex << "\\item " << option << "\n";
    }

    latex << "\\end{enumerate}\n";

    latex << "\\begin{solution}\n";
    latex << correctAnswer << "\n";
    latex << "\\end{solution}\n";

    return latex.str();
}

// QUESTION FACTORY

std::unique_ptr<Question> QuestionFactory::createQuestion(const std::string& input)
{
    std::stringstream ss(input);
    std::string type;
    std::getline(ss, type);

    if (type == "True False\r")
    {
        std::string question;
        std::string answerLine;

        std::getline(ss, question);
        std::getline(ss, answerLine);

        bool answer = (answerLine == "T");

        return std::make_unique<TrueFalseQuestion>(question, answer);
    }

    else if (type == "Short Answer\r")
    {
        std::string question;
        std::string answer;

        std::getline(ss, question);
        std::getline(ss, answer);

        return std::make_unique<ShortAnswerQuestion>(question, answer);
    }

    else if (type == "Multiple Choice\r")
    {
        std::string question;
        std::getline(ss, question);

        std::vector<std::string> options;
        std::string line;

        for (int i = 0; i < 4; i++)
        {
            std::getline(ss, line);
            options.push_back(line);
        }

        std::string answerLine;
        std::getline(ss, answerLine);

        char correct = answerLine[0];

        return std::make_unique<MultipleChoiceQuestion>(question, options, correct);
    }

    return nullptr;
}