# Apartment App

### Rails App
- $ rails new apartment_app -d postgresql -T
- $ cd apartment_app
- $ rails db:create

### RSpec Install
- $ bundle add rspec-rails
- $ rails generate rspec:install

### Devise
- $ bundle add devise
- $ rails generate devise:install
- $ rails generate devise User
- $ rails db:migrate
- Set action mailer in *config/environments/development.rb*

### Apartment Resource
- Apartments have: a street designation, a city, state, a manager's name, manager's contact email, monthly rental price, bedrooms, bathrooms, and whether they allow pets
- $ rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string user_id:integer
- $ rails db:migrate
- defined relationships between model classes

### React in Rails
- $ bundle add react-rails
- $ rails webpacker:install
- $ rails webpacker:install:react
- $ rails generate react:install
- $ rails g react:component App
- $ rails g controller Home
- Add a file in *app/views/home* called *index.html.erb*
- *index.html.erb*:
```
<%= react_component("App", {
    logged_in: user_signed_in?,
    sign_in_route: new_user_session_path,
    sign_out_route: destroy_user_session_path
}) %>
```
- Add `root to: 'home#index'` to *config/routes.rb*
- Add constraints to routes: `get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }`

### Installs
- $ bundle add bootstrap (Restart the rails server if running!!)
- Modify the application.css to be a "sass" file: $ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
- Add an import to the "sass" file @import 'bootstrap'
- $ yarn add reactstrap
- $ yarn add react-router-dom

### File Structure
- pages, components, assets
- pages: Home, ApartmentIndex, ApartmentShow, ApartmentNew, ApartmentEdit, NotFound
- components: Header, Footer
