#ifndef STUDENT_RESERVATION_CREDITS_H
#define STUDENT_RESERVATION_CREDITS_H

#include <string>
#include <vector>

class StudentReservationCredits {
    public:
        StudentReservationCredits(const std::string& studentID, 
                                  const std::string& studentName, 
                                  int monthlyCredits);
        std:: string GetStudentID() const;
        std:: string GetStudentName() const;
        int GetCurrentCredits() const;
        int GetTotalReservations() const;
        const std::vector<int>& GetReservationHistory() const;

        void MakeReservation(int numSlots);

    private:
        const std::string studentID_;
        std::string studentName_;
        int currentCredits_;
        std::vector<int> reservationHistory_;

};

#endif