import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="hero-section text-white d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="display-4 fw-bold">Embark on Your Perfect Journey</h1>
                            <p className="lead mt-3">
                                At WhisperStarlight, we offer tailored travel experiences that bring your dream destinations within reach.
                                Explore exclusive deals on flights, hotels, and tours worldwide.
                            </p>
                            <ul className="mt-4">
                                <li>🌴 Handpicked Getaways for Every Season</li>
                                <li>🌍 Global Reach with Local Expertise</li>
                                <li>🧳 Customizable Travel Packages</li>
                            </ul>
                        </div>

                        <div className="col-md-6">
                            <div className="card p-4 shadow-lg search-box">
                                <h5><i className="bi bi-search me-2"></i>Find Your Next Adventure</h5>

                                <div className="btn-group my-3" role="group">
                                    <button className="btn btn-outline-secondary">Flights</button>
                                    <button className="btn btn-outline-secondary">Hotels</button>
                                    <button className="btn btn-dark">Flights & Hotels</button>
                                </div>

                                <div className="mb-3">
                                    <div className="btn-group">
                                        <button className="btn btn-outline-secondary">One Way</button>
                                        <button className="btn btn-dark">Round Trip</button>
                                    </div>
                                </div>

                                <div className="row g-2">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="✈️ Departure" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control" placeholder="📍 Destination" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="date" className="form-control" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="date" className="form-control" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" className="form-control" placeholder="👤 Adults" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" className="form-control" placeholder="🧒 Children" />
                                    </div>
                                </div>

                                <button className="btn btn-primary w-100 mt-3">✈️ Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section className="py-5 bg-light planning-section">
                <div className="container">
                    <h2 className="text-center mb-5 fw-bold">Plan Your Dream Vacation</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card h-100 text-center p-4 shadow-sm">
                                <div className="mb-3 text-danger display-6">
                                    <i className="bi bi-geo-alt-fill"></i>
                                </div>
                                <h5 className="fw-bold">Tailored Travel Experiences</h5>
                                <p>
                                    Design a journey that matches your unique interests. Whether you’re seeking cultural immersion,
                                    thrilling adventures, or a peaceful retreat, we ensure every detail is customized.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 text-center p-4 shadow-sm">
                                <div className="mb-3 text-danger display-6">
                                    <i className="bi bi-sliders2-vertical"></i>
                                </div>
                                <h5 className="fw-bold">Comprehensive Travel Search</h5>
                                <p>
                                    Effortlessly compare flights and accommodations from top-rated travel services. Our advanced search
                                    engine brings you the best options to make your trip seamless and cost-effective.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card h-100 text-center p-4 shadow-sm">
                                <div className="mb-3 text-danger display-6">
                                    <i className="bi bi-piggy-bank-fill"></i>
                                </div>
                                <h5 className="fw-bold">Unforgettable Adventures Await</h5>
                                <p>
                                    Embark on a journey that promises unforgettable memories. From exotic destinations to hidden gems,
                                    we help you explore the world in extraordinary ways.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Trending Locations Section */}
            <section className="py-5">
                <div className="container">
                    <h2 className="text-center mb-5 fw-bold">Trending Locations</h2>
                    <div className="row g-4">
                        { [
                            {
                                title: "Albania",
                                img: "https://whisperstarlight.com/img/trend/albania-hero.webp",
                                desc: "Discover Albania’s unspoiled beaches, charming mountain villages, and rich tapestry of history waiting to be explored."
                            },
                            {
                                title: "Algeria",
                                img: "https://whisperstarlight.com/img/trend/algeria-hero.webp",
                                desc: "Uncover the secrets of Algeria, from the endless Sahara dunes to ancient Roman ruins and vibrant urban life."
                            },
                            {
                                title: "Argentina,",
                                img: "https://whisperstarlight.com/img/trend/argentina-hero.webp",
                                desc: "Experience Argentina’s diverse wonders — from Patagonia’s glaciers to Buenos Aires’ passionate tango rhythms."
                            },
                            {
                                title: "Australia",
                                img: "https://whisperstarlight.com/img/trend/australia-hero.webp",
                                desc: "Relax in the Bahamas, a tropical paradise known for its crystal-clear waters, white sand beaches, and vibrant marine life."
                            },
                            {
                                title: "Austria",
                                img: "https://whisperstarlight.com/img/trend/austria-hero.webp",
                                desc: "Wander through Austria’s storybook villages, imperial palaces, and breathtaking alpine landscapes."
                            },
                            {
                                title: "Bahamas",
                                img: "https://whisperstarlight.com/img/trend/bahamas-hero.webp",
                                desc: "Embark on an epic journey across Australia’s iconic Outback, lush rainforests, and world-famous beaches."
                            },
                        ].map((place, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="card h-100 shadow-sm border-0">
                                    <img src={place.img} className="card-img-top zoom-on-hover" alt={place.title} style={{ height: "200px", objectFit: "cover" }} />
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{place.title}</h5>
                                        <p className="card-text">{place.desc}</p>
                                        <Link to={`/location/${place.title.replace(/,| /g, '')}`} className="btn btn-outline-primary btn-sm">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
};
export default Home;
