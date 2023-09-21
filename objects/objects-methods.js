let restaurant = {
    name: 'KFC',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailablity: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount // "this" is a way to access object properties inside of the method of the object. So "this" is referring to restaurant.
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize){
        this.guestCount = this.guestCount - partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailablity(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailablity(4))
