#pragma once
#include <vector>

template <typename T>
class Compare {
    private:
    std::vector<T> comparevals;

    public:
        Compare(const std::vector<T>& input);

        std::vector<T> getLessThan(T val);
        std::vector<T> getGreaterThan(T val);
        int matches(T val);

};

template <typename T>
Compare<T>::Compare(const std::vector<T>& input) : comparevals(input){}

template <typename T>
std::vector<T> Compare<T>::getLessThan(T val) {
    std::vector<T> result;

    for (const T& item : comparevals) {
        if (item < val) {
            result.push_back(item);
        }
    }
    return result;
}

template <typename T>
std::vector<T> Compare<T>::getGreaterThan(T val) {
    std::vector<T> result;

    for (const T& item : comparevals) {
        if (item > val) {
            result.push_back(item);
        }
    }
    return result;
}

template <typename T>
int Compare<T>::matches(T val) {
    int nummatches = 0;

    for (const T& item : comparevals) {
        if (item == val) {
            nummatches ++;
        }
    }
    return nummatches;
}


