
//5 harften fazla olanlar??

const PRODUCTS = ["Mic","Cable","Speaker","Desktop PC","Server","Mouse","Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)//5 karakterden fazla olanları filtreledik.
console.log(NEW_PRODUCTS)


//aktif kullanıcılar?
const USERS = [
    {fullName: "Büşra Aygül", isActive: true},
    {fullName: "aa", isActive: false},
    {fullName: "bb", isActive: false},
    {fullName: "Fatih Oruç", isActive: true},
]

// const  ACTIVE_USERS = USERS.filter(user => user.isActive === true)

const ACTIVE_USERS = USERS.filter(user => user.isActive)//true demeden böyle de yazılabilir çünkü zaten bir şey yazılmazsa true döner
console.log(ACTIVE_USERS)