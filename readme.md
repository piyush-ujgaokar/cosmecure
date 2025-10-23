# Cosmecure

CosmeCure is a comprehensive Django-based web application designed to provide personalized skincare and cosmetics recommendations. The platform features interactive quizzes to assess skin types and cosmetic preferences, product details, user accounts, and a profile system for managing recommendations and purchases.

## Features

- **Skincare Quiz**: Interactive quiz to determine skin type (dry, normal, oily) and recommend suitable products.
- **Cosmetic Quiz**: Quiz for cosmetic preferences and recommendations.
- **Product Details**: Detailed pages for skincare products including facewash, moisturizer, and sunscreen for different skin types.
- **User Accounts**: Registration, login, and profile management.
- **Profile System**: Dashboard for users to view recommendations, add to cart, and track orders.
- **E-commerce Integration**: Buy now functionality for products.
- **Responsive Design**: Mobile-friendly interface with custom CSS and JavaScript.

## Technologies Used

- **Backend**: Django 5.2.6
- **Database**: MySQL
- **Frontend**: HTML5, CSS3, JavaScript
- **Image Processing**: Pillow
- **Deployment**: Gunicorn, WhiteNoise for static files
- **Other Libraries**: MySQL Connector, QRCode, OpenCV, NumPy

## Installation

### Prerequisites

- Python 3.8 or higher
- MySQL Server
- Git

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd cosmecure
   ```

2. **Create a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up the database**:
   - Create a MySQL database named `cosmecure_db`.
   - Update the database credentials in `cosmecure/settings.py` if necessary (default: user='root', password='Nilesh2706@').

5. **Run migrations**:
   ```bash
   python manage.py migrate
   ```

6. **Create a superuser (optional)**:
   ```bash
   python manage.py createsuperuser
   ```

7. **Collect static files**:
   ```bash
   python manage.py collectstatic
   ```

## Running the Project

1. **Start the development server**:
   ```bash
   python manage.py runserver
   ```

2. **Access the application**:
   - Open your browser and go to `http://127.0.0.1:8000/`

3. **Admin panel** (if superuser created):
   - Go to `http://127.0.0.1:8000/admin/`


## Usage

- **Home Page**: Introduction to the platform
- **Quizzes**: Take skincare or cosmetic quizzes to get personalized recommendations
- **Products**: Browse product details based on skin type
- **Profile**: Register/login to access personalized dashboard and cart
- **About**: Learn more about CosmoCure



## License

This project is licensed under the MIT License.

## Contributors

- Dimple Ghormode
- Mahim Kubade
- Piyush Ujgaokar
- Shrilesh Dhobale
- Ayush Chaudhari
- Nomesh Shahare

## Support

For questions or support, please contact the development team.
