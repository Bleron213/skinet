namespace Core.Entities.OrderAggregate
{
    public class Address
    {
        public Address()
        {
        }

        public Address(string firstName, string lastname, string street, string city, string state, string zipcode)
        {
            FirstName = firstName;
            Lastname = lastname;
            Street = street;
            City = city;
            State = state;
            Zipcode = zipcode;
        }

        public string FirstName { get; set; }
        public string Lastname { get; set; }
        public string Street { get; set; } 
        public string City { get; set; } 
        public string State { get; set; } 
        public string Zipcode { get; set; }
    }
}