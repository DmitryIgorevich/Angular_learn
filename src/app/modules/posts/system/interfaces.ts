export interface IPost {
    body: string
    id: number
    title: string
    userId: string
}

export interface IUser {
    address: IAddress
    company: ICompany
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
}

export interface IAddress {
    city: string
    geo: {
        lat: string
        lng: string
    }
    street: string
    suite: string
    zipcode: string
}

export interface ICompany {
    bs: string
    catchPhrase: string
    name: string
}

export interface IComment {
    postId: number
    id: number
    name: string
    email: string
    body: string
}
