export const newBooking = async (req, res, next) => {
    const { movie, date, seatNumber, user } = req.body;

    let newBooking;

    try {
        newBooking = new Bookings({
            movie, date: new Date(`${date}`, seatNumber, user),
        });
        newBooking = await newBooking.save();
    } catch (err) {
        return console.log(err);
    }
    if (!newBooking) {
        return res.status(500).json({message: "Unable to create a booking"})
    }

    return res.status(201).json({booking: newBooking});
};