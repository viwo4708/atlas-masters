#include <memory>
#include <iostream>

class Player {
public:
    virtual void play() = 0;
    virtual ~Player() = default;
};

class Teammate : public Player {
public:
    void play() override {
        std::cout << "Teammate makes a pass!\n";
    }
};

class Distractor : public Player {
public:
    void play() override {
        std::cout << "DISTRACTION!!! RAHHHHHHHH\n";
    }
};

class Opponent : public Player {
public:
    void play() override {
        std::cout << "Opponent takes the steal!\n";
    }
};

enum class PlayerType {
    Teammate,
    Distractor,
    Opponent
};

class PlayerFactory {
public:
    static std::unique_ptr<Player> createPlayer(PlayerType type) {
        switch (type) {
            case PlayerType::Teammate:
                return std::make_unique<Teammate>();
            case PlayerType::Distractor:
                return std::make_unique<Distractor>();
            case PlayerType::Opponent:
                return std::make_unique<Opponent>();
            default:
                return nullptr;
        }
    }
};

int main() {
    auto player1 = PlayerFactory::createPlayer(PlayerType::Teammate);
    auto player2 = PlayerFactory::createPlayer(PlayerType::Distractor);
    auto player3 = PlayerFactory::createPlayer(PlayerType::Opponent);

    player1->play();
    player2->play();
    player3->play();

    return 0;
}