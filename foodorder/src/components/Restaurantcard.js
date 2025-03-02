
const RestaurantCard = ({ resData }) => {
    if (!resData) return null; // Handle missing data

    const {
        img,
        name = "Unknown Restaurant",
        cuisines = [],
        avgRating = "N/A",
        costForTwo = "Price Unavailable",
        deliveryTime
    } = resData.info || {}; // Ensure safe access to data

    return (
        <div className="res-card" style={styles.card}>
            <img
                className="res-logo"
                src={img}
                alt={name}
                style={styles.image}
            />

            <h3 style={styles.title}>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating} ⭐</h4>
            <h4>{costForTwo}</h4>
            {deliveryTime ? <h4>{deliveryTime} minutes</h4> : <h4>Delivery time unavailable</h4>}
        </div>
    );
};

const styles = {
    card: {
        backgroundColor: '#f0f0f0',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '250px',
    },
    image: {
        width: '100%',
        borderRadius: '8px',
        objectFit: 'cover',
    },
    title: {
        fontSize: '18px',
        marginTop: '10px',
    },
};

export default RestaurantCard;
