#include "Order.h"

Order::Order(std::string name) : orderName(name), companyName(""){}

Order::Order(std::string name, std::string company) : orderName(name), companyName(company){}

int main() {
    return 0;
}