#include <iostream>
#include <vector>
#include <string>
#include "Compare.hpp"

struct Fighter {
    int totalpower;

    bool operator<(const Fighter& other) const {return totalpower < other.totalpower;}
    bool operator>(const Fighter& other) const {return totalpower > other.totalpower;}
    bool operator==(const Fighter& other) const {return totalpower == other.totalpower;}

};

template <typename T>
void printVector(const std::vector<T>& vec) {
    for (const T& item : vec) {
        std::cout << item << " ";
    }
    std::cout << "\n";
};

std::ostream& operator<<(std::ostream& os, const Fighter& f) {
    os << "total power: " << f.totalpower;
    return os;
};

int main() {
//int
    std::vector<int> intVec = {1, 5, 7, 3, 4, 1};
    Compare<int> intComp(intVec);
    std::cout << "Ints < 4: "; 
    printVector(intComp.getLessThan(4));
    std::cout << "Ints > 4: "; 
    printVector(intComp.getGreaterThan(4));
    std::cout << "Ints == 4: " << intComp.matches(1) << "\n";
//double
    std::vector<double> doubleVec = {1.1, 3.33, 2.2, 4.0, 3.2};
    Compare<double> doubleComp(doubleVec);
    std::cout << "Doubles < 3.0: "; 
    printVector(doubleComp.getLessThan(3.0));
    std::cout << "Doubles > 3.0: "; 
    printVector(doubleComp.getGreaterThan(3.0));
    std::cout << "Doubles == 2.2: " << doubleComp.matches(2.2) << "\n";
//string
    std::vector<std::string> stringVec = {"pancreas","colon", "liver", "aorta", "ligament", "ligament", "spleen"};
    Compare<std::string> stringComp(stringVec);
    std::cout << "Strings < colon: " << "\n";
    stringComp.getLessThan("ligament");
    std::cout << "Strings > liver: ";
    printVector(stringComp.getLessThan("liver"));
    std::cout << "Strings == ligament: " << stringComp.matches("ligament") << "\n";

//user defined struct: Fighter
    std::vector<Fighter> fighters = {{3}, {7}, {2}, {7}};
    Compare<Fighter> fighterComp(fighters);
    std::cout << "Fighters < 5: "; printVector(fighterComp.getLessThan({5}));
    std::cout << "Fighters > 5: "; printVector(fighterComp.getGreaterThan({5}));
    std::cout << "Fighters == 7: " << fighterComp.matches({7}) << "\n";

    return 0;
}