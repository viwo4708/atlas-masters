#pragma once
#include <string>
#include <vector>
#include <memory>

class Question {
    protected:
        std::string questionText;
    public: 
        virtual std::string toLatex() const = 0;
        virtual ~Question() = default;
};

class TrueFalseQuestion : public Question {
    private:
        bool answer;
    public:
        TrueFalseQuestion(const std::string& text, bool answer);
        std::string toLatex() const override;
};

class ShortAnswerQuestion : public Question {
    private:
        std::string answer;
    public:
        ShortAnswerQuestion(const std::string& text, const std::string& answer);
        std::string toLatex() const override;
};

class MultipleChoiceQuestion : public Question {
    private:
        std::vector<std::string> options;
        char correctAnswer;
    public:
        MultipleChoiceQuestion(
            const std::string& text,
            const std::vector<std::string>& options,
            char correctAnswer
        );

        std::string toLatex() const override;
};

class QuestionFactory {
    public: 
        static std::unique_ptr<Question> createQuestion(const std::string& input);
};