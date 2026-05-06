# """
# Logger utility - Ghi log cho ứng dụng Python (không liên quan đến todo)
# """
# import logging
# from logging.handlers import RotatingFileHandler
# import os

# LOG_DIR = os.path.join(os.path.dirname(__file__), '..', 'logs')
# os.makedirs(LOG_DIR, exist_ok=True)

# def setup_logger(name='app', log_file='app.log', level=logging.INFO):
#     log_path = os.path.join(LOG_DIR, log_file)

#     handler = RotatingFileHandler(log_path, maxBytes=5 * 1024 * 1024, backupCount=3)
#     formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
#     handler.setFormatter(formatter)

#     logger = logging.getLogger(name)
#     logger.setLevel(level)
#     logger.addHandler(handler)

#     # Console handler
#     console = logging.StreamHandler()
#     console.setFormatter(formatter)
#     logger.addHandler(console)

#     return logger

# # Sử dụng: logger = setup_logger(); logger.info("Hello")