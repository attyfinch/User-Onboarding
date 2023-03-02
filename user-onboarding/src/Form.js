import React from "react"


// name, email, password, terms of service checkbox, submit button

//change handler
//value


export default function Form({ change, values, disabled, submit, errors }) {

    const onChange = e => {
        const { name, value, checked, type } = e.target;
        const valueToUse = type === "checkbox" ? checked : value   
        change(name, valueToUse)
    }

    const onSubmit = e => {
        e.preventDefault();
        submit();
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <div>{errors.firstName}</div>
                    <div>{errors.lastName}</div>
                    <div>{errors.email}</div>
                    <div>{errors.role}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
                <div>
                    <label className="firstName">First Name
                        <input
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={onChange}
                        maxLength="60"
                        />
                    </label>
                </div>
                <div>
                    <label className="lastName">Last Name
                        <input
                        type="text"
                        name="lastName"
                        value={values.lastName}
                        onChange={onChange}
                        maxLength="60"
                        />
                    </label>
                </div>
                <div>
                    <label className="email">Email
                        <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        />
                    </label>
                </div>
                <div>
                    <label className="role">Role
                        <select name="role" onChange={onChange}>
                            <option value="">Select a role</option>
                            <option value="Actor">Actor</option>
                            <option value="Politician">Politician</option>
                            <option value="Musician">Musician</option>
                            <option value="Athlete">Athlete</option>
                            <option value="Influencer">Influencer</option>
                            <option value="Fortune Teller">Fortune Teller</option>
                        </select> 
                    </label>
                </div>
                <div>
                    <label className="password">Password
                        <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={onChange}
                        minLength="8"
                        />
                    </label>
                </div>
                <div>
                    <label className="terms">Accept Terms of Service
                        <input
                        type="checkbox"
                        name="terms"
                        value={values.terms}
                        checked={values.terms}
                        onChange={onChange}
                        />
                    </label>
                </div>
                <div>
                    <button disabled={disabled}>Submit</button>
                </div>
            </form>
        </div>
    )
}