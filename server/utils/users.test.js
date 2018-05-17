const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
	var users;

	beforeEach(() => {
		users = new Users();
		users.users = [{
			id: '1', 
			name: 'Tom',
			room: 'Node Course'
		} ,{
			id: '2', 
			name: 'Jen',
			room: 'React Course'
		}, {
			id: '3', 
			name: 'Rob',
			room: 'Node Course'
		}]
	});

	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'Ryan',
			room: 'The Office Fans'
		};
		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.users).toEqual([user]);

	});

	it('should remove a user', () => {

	});

	it('should not remove user', () => {

	});

	it('should find user', () => {
		
	});

	it('should not find user', () => {
		
	});		

	it('should return names for node course', () => {
		var userList = users.getUserList('Node Course');

		expect(userList).toEqual(['Tom', 'Rob']);
	});

	it('should return names for React course', () => {
		var userList = users.getUserList('React Course');

		expect(userList).toEqual(['Jen']);
	});	
});