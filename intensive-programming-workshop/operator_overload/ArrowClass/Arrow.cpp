#include "Arrow.h"

Arrow::Arrow(int x, int y) : xcoord(x), ycoord(y){};

Arrow Arrow::operator+(const Arrow& other) const {
    return Arrow(xcoord + other.xcoord, ycoord + other.ycoord);
}

Arrow Arrow::operator*(int scalar) const {
    return Arrow(xcoord * scalar, ycoord * scalar);
}

bool Arrow::operator==(const Arrow& other) const {
    if (other.xcoord == xcoord && other.ycoord == ycoord) {
        return true;
    } else {
        return false;
    }
}

std::ostream& operator<<(std::ostream& os, const Arrow& arrow) {
    os << "Arrow Coordinates: " << arrow.xcoord << ", " << arrow.ycoord << std::endl;
    return os;
}

int main() {
    return 0;
}