#include "StudentReservationCredits.h"
#include <stdexcept>

StudentReservationCredits::StudentReservationCredits(
    const std::string& studentID,
    const std::string& studentName,
    int monthlyCredits
): studentID_(studentID), studentName_(studentName), currentCredits_(monthlyCredits) {
    if (monthlyCredits < 0) {
        throw std::invalid_argument("Monthly credits cannot be negative");
    }

    if(studentID.empty()) {
        throw std::invalid_argument("Student ID cannot be empty");
    }
}

std::string StudentReservationCredits::GetStudentID() const {
    return studentID_;
}

std::string StudentReservationCredits::GetStudentName() const {
    return studentName_;
}

int StudentReservationCredits::GetCurrentCredits() const {
    return currentCredits_;
}

int StudentReservationCredits::GetTotalReservations() const {
    return reservationHistory_.size();
}

const std::vector<int>& StudentReservationCredits::GetReservationHistory() const {
    return reservationHistory_;
}

void StudentReservationCredits::MakeReservation(int numSlots) {
    if (numSlots <= 0) {
        throw std::invalid_argument("reservation slots must be positive");
    }

    if (numSlots > currentCredits_) {
        throw std::invalid_argument("not enough reservation credits");
    }

    reservationHistory_.push_back(numSlots);
    currentCredits_ -= numSlots;
}