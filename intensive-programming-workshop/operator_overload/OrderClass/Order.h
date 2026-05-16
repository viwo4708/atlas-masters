#ifndef ORDER_H
#define ORDER_H

#include <string> 

class Order {
    public:
    Order(std::string name);
    Order(std::string name, std::string company);

    private:
    std::string orderName;
    std::string companyName;
};

#endif