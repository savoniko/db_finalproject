package com.example.springtemplate.daos;

import com.example.springtemplate.models.User;

import java.sql.*;
import java.util.*;

public class UserJdbcDao {
    static final String DRIVER = "com.mysql.cj.jdbc.Driver";
    static final String HOST = "localhost:3306";
    static final String SCHEMA = "YOUR_SCHEMA";
    static final String CONFIG = "serverTimezone=UTC";
    static final String URL =
            "jdbc:mysql://"+HOST+"/"+SCHEMA+"?"+CONFIG;
    static final String USERNAME = "YOUR_USERNAME";
    static final String PASSWORD = "YOUR_PASSWORD";
    
    static Connection connection = null;
    static PreparedStatement statement = null;
    String CREATE_USER = "INSERT INTO users VALUES (null, ?, ?, ?, ?, ?, null, null)";
    String FIND_ALL_USERS = "SELECT * FROM users";
    String FIND_USER_BY_ID = "SELECT * FROM users WHERE id=?";
    String DELETE_USER = "DELETE FROM users WHERE id=?";
    String UPDATE_USER_PASSWORD = "UPDATE users SET password=? WHERE id=?";
    String UPDATE_USER = "UPDATE users SET first_name=?, last_name=?, username=?, password=? WHERE id=?";
    
    private Connection getConnection() throws ClassNotFoundException, SQLException {
        Class.forName(DRIVER);
        return DriverManager.getConnection(URL, USERNAME, PASSWORD);
    }
    
    private void closeConnection(Connection connection) throws SQLException {
        connection.close();
    }
    
    public User findUserById(Integer id) throws SQLException, ClassNotFoundException {
        User user = null;
        connection = getConnection();
        statement = connection.prepareStatement(FIND_USER_BY_ID);
        statement.setInt(1, id);
        ResultSet resultSet = statement.executeQuery();
        if(resultSet.next()) {
            user = new User(
                    resultSet.getString("username"),
                    resultSet.getString("password"),
                    resultSet.getString("first_name"),
                    resultSet.getString("last_name"),
                    resultSet.getString("profile_picture")
            );
        }
        closeConnection(connection);
        return user;
    }
    
    public Integer deleteUser(Integer userId) throws SQLException, ClassNotFoundException {
        Integer rowsDeleted = 0;
        connection = getConnection();
        statement = connection.prepareStatement(DELETE_USER);
        statement.setInt(1, userId);
        rowsDeleted = statement.executeUpdate();
        closeConnection(connection);
        return rowsDeleted;
    }
    
    public Integer updateUser(Integer userId, User newUser) throws SQLException, ClassNotFoundException {
        Integer rowsUpdated = 0;
        connection = getConnection();
        statement = connection.prepareStatement(UPDATE_USER);
        statement.setString(1, newUser.getFirstName());
        statement.setString(2, newUser.getLastName());
        statement.setString(3, newUser.getFirstName());
        statement.setString(4, newUser.getLastName());
        statement.setInt(5, userId);
        rowsUpdated = statement.executeUpdate();
        closeConnection(connection);
        return rowsUpdated;
    }
    
    public List<User> findAllUsers() throws ClassNotFoundException, SQLException {
        List<User> users = new ArrayList<User>();
        connection = getConnection();
        statement = connection.prepareStatement(FIND_ALL_USERS);
        ResultSet resultSet = statement.executeQuery();
        while (resultSet.next()) {
            User user = new User(
                    resultSet.getString("username"),
                    resultSet.getString("password"),
                    resultSet.getString("first_name"),
                    resultSet.getString("last_name"),
                    resultSet.getString("profile_picture")
            );
            users.add(user);
        }
        closeConnection(connection);
        return users;
    }
    public Integer createUser(User user)
            throws ClassNotFoundException, SQLException {
        Integer rowsUpdated = 0;
        connection = getConnection();
        statement = connection.prepareStatement(CREATE_USER);
        statement.setString(1, user.getUsername());
        statement.setString(2, user.getPassword());
        statement.setString(3, user.getFirstName());
        statement.setString(4, user.getLastName());
        statement.setString(5, user.getProfilePicture());
        rowsUpdated = statement.executeUpdate();
        closeConnection(connection);
        return rowsUpdated;
    }
    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        System.out.println("JDBC DAO");
        UserJdbcDao dao = new UserJdbcDao();
//        User adam = new User("Adam", "Smith", "adams", "invisiblehand", "http://bbc.in/30gXhI4");
//        User catherine = new User("Catherine", "Wood", "cathie", "bitcoinisbig", "https://ark-invest.com/");
//        dao.createUser(adam);
//        dao.createUser(thomas);
//        dao.createUser(catherine);
//        List<User> users = dao.findAllUsers();
//        for(User user: users) {
//            System.out.println(user.getUsername());
//        }
//        User user = dao.findUserById(5);
//        System.out.println(user.getUsername());
//        dao.deleteUser(5);
//        List<User> users = dao.findAllUsers();
//        for(User user: users) {
//            System.out.println(user.getUsername());
//        }
        User thomas = new User("Thomas", "Sowell", "thomas", "polymath", "http://www.tsowell.com/");
        User newTom = new User(
                "Tom",
                "Sowell",
                "tom",
                "knowitall",
                thomas.getProfilePicture());
        dao.updateUser(6, newTom);
        User tom = dao.findUserById(6);
        System.out.println(tom.getUsername());
    }
}
