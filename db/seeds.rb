user = [
  {
    email: "test@test.com",
    password: "123456",
    password_confirmation: "123456",
  }
]
user.each do |attribute|
  User.create attribute
end


apartments = [
  {
    street: "221B Baker St",
    city: "London",
    state: "N/A",
    manager: "Ms. Hudson",
    email: "ms-hud@uk.com",
    price: "1000",
    bedrooms: 2,
    bathrooms: 2,
    pets: "no",
  },
  {
    street: "1234 Eminem St",
    city: "Detroit",
    state: "MI",
    manager: "Slim Shady",
    email: "rapgod123@email.com",
    price: "5000",
    bedrooms: 2,
    bathrooms: 1,
    pets: "yes",
  },
  {
    street: "221B Baker St",
    city: "London",
    state: "N/A",
    manager: "Ms. Hudson",
    email: "ms-hud@uk.com",
    price: "1000",
    bedrooms: 2,
    bathrooms: 2,
    pets: "no",
  }
]

test_user = User.first

apartments.each do |attribute|
  test_user.apartments.create attribute
puts apartment: "#{attribute}"
end
