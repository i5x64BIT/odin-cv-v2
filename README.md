# Odin - CV App

This is my first react project

### Data structure:
```
person
  information
    firstName
    lastName
    ?title
  ?contact
    phone
    email
    website
    address
  ?education
    item
      emphasis
      location
      from
      to
    ?item
  ?skills
    ?item
  experience
    item
      position
      company
      location
      from
      ?to
      ?desc
    ?item
  ?reference (<=2)
    ?item
      fullName
      location
      title
      contact (<=3)
        item
          media
          address
        ?item
```

### Components:
```
ListItem
  type: type
  content (based on type)
List
  type: type
  items: [ListItem]
Heading
  type: type
Section
  type: contact/education/skills/experience/reference/main-title
  content: person.type
MainTitle
  content: person.info
Image
  url: "https://example.png" || person.svg
Panel
  type: side/main
```

