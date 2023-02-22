export const validate = (input) => {
    let errors = {
        name: "",
        img: "",
        stats: "",
    };

    if (!input.name) {
        errors.name = "Pokemon name is required";
    }
    else if (input.name.length >= 30) {
        errors.name = "The name of the pokemon can have up to 30 letters";
    }
    else if (input.img && !input.img.startsWith("https://")) {
        errors.img = "Must start with the correct format (https://)"
    }
    else if (input.hp < 0 || input.hp > 101 || input.attack < 0 || input.attack > 101 || input.defense < 0 || input.defense > 101
        || input.speed < 0 || input.speed > 101 || input.height < 0 || input.height > 101 || input.weight < 0 || input.weight > 101) {
        errors.stats = "Choice a stat between 0 a 100";
    }


    return errors;
}

export default validate;