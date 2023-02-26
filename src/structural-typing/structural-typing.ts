type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
    return (
        user.username === sentValue.username && user.password === sentValue.password
    );
};

const user = { username: 'Lucas', password: '123' };
const sentValue = { username: 'Lucas', password: '123' };

console.log(verifyUser(user, sentValue));
