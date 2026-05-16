#include <iostream>
#include "StudentReservationCredits.h"

int main() {
    //  Happy path
    StudentReservationCredits student("12345", "Tory Bigelow", 5);

    student.MakeReservation(2);
    student.MakeReservation(1);

    std::cout << "Remaining credits: "
              << student.GetCurrentCredits() << std::endl;

    std::cout << "Total reservations made: "
              << student.GetTotalReservations() << std::endl;

    // Edge case: reserving exactly remaining credits
    student.MakeReservation(2);
    std::cout << "Remaining after using all credits: "
              << student.GetCurrentCredits() << std::endl;

     // Expected error: not enough credits
    try {
        student.MakeReservation(1);
    } catch (const std::exception& e) {
        std::cout << "Caught expected error: "
                  << e.what() << std::endl;
    }

    // Expected error: invalid input
    try {
        student.MakeReservation(0);
    } catch (const std::exception& e) {
        std::cout << "Caught expected error: "
                  << e.what() << std::endl;
    }

    return 0;
    
}