#ifndef ARROW_H
#define ARROW_H

#include <iostream>

class Arrow {
    public: 
        
        Arrow(int x, int y);

        Arrow operator+(const Arrow& other) const;
        Arrow operator*(int scalar) const;
        bool operator==(const Arrow& other) const;

        friend std::ostream& operator << (std::ostream& os, const Arrow& arrow);

    private:
        int xcoord;
        int ycoord;

};


#endif
