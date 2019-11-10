DELIMITER //
CREATE PROCEDURE update_user_route(INT, INT, INT, INT)
BEGIN
    INSERT INTO affected_bus (BusNo, RouteNo, PassedBusStopNo, ApproachingBusStopNo) Values(INT,INT, INT, INT );
END
