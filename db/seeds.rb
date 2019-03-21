10.times do
  department = Department.create(
    name: Faker::Commerce.department,
    description: Faker::Lorem.sentence,
  )
  10.times do
    product = department.products.create(
      name: Faker::Commerce.product_name,
      description: Faker::Lorem.sentence,
      price: Faker::Commerce.price.to_f,
    )
  end
end

puts " 10 departments seeded 100 Products Seeded"